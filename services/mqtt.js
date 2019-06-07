/**
 * PubSub abstraction on top of MQTT
 *
 * - Multiplex subscriptions
 * - RPC
 *
 * wildcards not (yet) supported
 */

const debug = false;
let connectPromise;
function ready() {
  if (connectPromise) {
    return connectPromise;
  }
  return Promise.reject(new Error("not connected"));
}

export default {
  listeners: {},
  async connect(options) {
    const { connect } = await import("async-mqtt");
    connectPromise = new Promise((resolve, reject) => {
      const client = connect(options);
      let connected = false;
      client.on("connect", () => {
        connected = true;
        client.on("error", err => {
          console.warn("MQTT:", err.message); // eslint-disable-line no-console
        });
        resolve(client);
        if (debug) {
          client.subscribe("#");
        }
      });
      client.on("message", (topic, payload) => {
        if (debug) {
          console.log(topic); // eslint-disable-line no-console
        }
        for (const [_topic, listeners] of Object.entries(this.listeners)) {
          if (_topic === topic) {
            for (const callback of listeners) {
              callback(payload);
            }
          }
        }
      });
      client.once("error", err => {
        if (!connected) {
          client.end();
          reject(err);
        }
      });
    });
    return connectPromise;
  },

  async subscribe(topic, callback) {
    const mqtt = await ready();
    this.listeners[topic] = this.listeners[topic] || [];
    this.listeners[topic].push(callback);
    if (this.listeners[topic].length === 1) {
      return mqtt.subscribe(topic);
    }
  },

  async unsubscribe(topic, callback) {
    let last = true;
    this.listeners[topic] = this.listeners[topic] || [];
    if (arguments.length === 1) {
      delete this.listeners[topic];
    } else {
      const i = this.listeners[topic].indexOf(callback);
      if (i !== -1) {
        this.listeners[topic].splice(i, 1);
        last = this.listeners[topic].length === 0;
      }
    }
    if (last) {
      const mqtt = await ready();
      mqtt.unsubscribe(topic);
    }
  },

  async publish(topic, payload) {
    const mqtt = await ready();
    return mqtt.publish(topic, payload);
  },

  rpc(method, payload) {
    const id = guid();
    return new Promise((resolve, reject) => {
      const topic = `rpc/response/${method}/${id}`;
      const listener = buffer => {
        resolve(buffer);
        this.unsubscribe(topic, listener);
      };
      this.subscribe(topic, listener).catch(reject);
      this.publish(`rpc/request/${method}/${id}`, payload);
    });
  }
};

function guid() {
  return "xxxxxxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
