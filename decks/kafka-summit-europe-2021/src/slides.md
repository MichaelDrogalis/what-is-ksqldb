# How ksqlDB works

- Overarching theme: progress.
- Look at all the things you're not doing

---

# What problem it solves

---

# How you integrate it into your architecture

- Cluster of servers, clients that connect to it
- You submit queries that run on those servers
- Connect via CLI, client, UI, etc.

---

# Stateless

- Streams
- Rows
- Transformations + filters
- Chaining queries
- Concurrent consumers

---

### Streams

- No initiating serializers
- No fussing with command line scripts
- No custom partitioners

---

### Rows

- No Kafkacat
- No schema configuration

---

### Transformations + filters

- No event loop
- No producers and consumers
- No JVM exception handling
- I’m not saying how these map together - it just works

---

### Chaining queries

- No recompiling
- No restarting
- All of this happens at runtime

---

### Concurrent consumers

- No server configuration, triggers

---

# State

- Materialized views + pull queries
  - Get back a table to query
  - Just like Postgres
- Automatic repartitioning
- Changelogs
- Replay

---

# Scaling and fault tolerance

- Adding consumers
  - `ksql.service.id`
- Splitting state stores

---

# Scaling and fault tolerance

- High availability
  - `ksql.streams.num.standby.replicas` set to a value greater than or equal to 1
  - `ksql.query.pull.enable.standby.reads` set to true
  - `ksql.heartbeat.enable` set to true
  - `ksql.lag.reporting.enable` set to true

---

# Future work + CTA
