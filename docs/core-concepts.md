---
sidebar_position: 3
title: Core Concepts
---

# Core Concepts

Fusionize is designed as a distributed, event-driven Business Process Management System (BPMS) that natively integrates AI.

## Core Architecture

Fusionize operates as a **distributed orchestrator** that coordinates a network of **workflow nodes**.

- **Workflow Definition**: Workflows are defined declaratively using YAML or as a **Kubernetes Custom Resource (CRD)**.
- **Nodes**: These represent tasks or decision points. They can be executed by humans, AI models, or other system components.
- **Event-Driven Communication**: Communication between the orchestrator and nodes is handled via **message queues (AMQP)**, ensuring scalability and fault tolerance.

## Design Principles

Fusionize is built upon several key principles:

### ⚡ Event-Driven Execution
Every transition in a workflow is triggered by domain or system events. This leads to an asynchronous and highly scalable orchestration engine.

### 🤖 AI-Native
AI is a first-class participant in Fusionize, not just an external plugin. AI agents can:
- Make decisions
- Perform actions
- Trigger human collaboration

### 📈 Scalable & Reliable
The architecture harnesses robust technologies for enterprise-grade performance:
- **RabbitMQ**: Handles distributed message flow.
- **MongoDB**: Provides flexible persistence.
- **WebSocket**: Enables real-time coordination.

### 🔒 Secure by Design
Security is integral to the platform:
- **RSA-based signatures** for communication.
- **Keycloak** for robust identity management.
- **Fine-grained authorization** at the component level.

### 🧩 Extensible
Developers can easily extend the system by adding new node types and system tasks using a pluggable Spring Boot starter API.
