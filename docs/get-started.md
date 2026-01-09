---
sidebar_position: 2
title: Get Started
---

# Getting Started

This guide will help you set up and run the Fusionize Orchestrator locally for development.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Docker & Docker Compose**: For running the infrastructure services.
- **Java 21+**: Required to build and run the orchestrator application.

## Installation

### 1. Clone the Repository

Clone the `fusionize-orchestrator` repository to your local machine:

```bash
git clone git@github.com:project-fusionize/fusionize-orchestrator.git
```

### 2. Start Infrastructure

Navigate to the project directory and start the necessary services using Docker Compose:

```bash
cd fusionize-orchestrator
docker-compose up -d
```

:::info
The first startup may take some time as it pulls images and initializes containers, especially for Keycloak and MongoDB.
:::

### 3. Start the Application

Once the infrastructure is up, start the orchestrator application:

```bash
./gradlew dev
```

:::tip Troubleshooting
If you encounter an authentication error on startup, it is likely because Keycloak is not yet fully ready. Please wait a few moments and restart the application.
:::

## Accessing Services

When the specific Distributed Application infrastructure is running via Docker Compose, several services are exposed for you to interact with.

### Service Dashboard

| Service | URL | Credentials (User/Pass) | Description |
|---------|-----|-------------------------|-------------|
| **Fusionize Hub** | [http://localhost:3131](http://localhost:3131) | `fusionize-admin` / `admin` | The main dashboard for managing workflows and agents. |
| **Keycloak** | [http://localhost:8080](http://localhost:8080) | `admin` / `admin` | Identity and Access Management. |
| **RabbitMQ** | [http://localhost:15672](http://localhost:15672) | `fusionize` / `fusionize` | Message Broker Management UI. |

### Logging into Fusionize Hub

1. Navigate to [http://localhost:3131](http://localhost:3131).
2. You will be redirected to the Keycloak login page.
3. Use the **Realm Admin** credentials:
    - **Username:** `fusionize-admin`
    - **Password:** `admin`

These credentials are pre-configured in the `docker/keycloak/realm-export/fuz-realm.json` file.

## Infrastructure Configuration

The `docker-compose.yml` file defines the standard development environment. Here are some key configurations:

### RabbitMQ
- **Ports**:
    - `5672`: AMQP protocol (used by the orchestrator).
    - `15672`: Management UI.
    - `61613`: STOMP protocol (enabled via plugins).
- **Plugins Enabled**: `rabbitmq_stomp`, `rabbitmq_web_stomp`, `rabbitmq_management`.

### Keycloak
- **Database**: Uses a dedicated Postgres container (`keycloak-db`).
- **Import Strategy**: Starts with `--import-realm` to automatically load the `fuz` realm configuration.
- **Health Checks**: Enabled for monitoring.

### MongoDB
- **Database Name**: `fuzdb`
- **Volume**: Persists data to `mongo_data`.

## Network
All services communicate over the `fusionize-network` bridge network, allowing seamless discovery between containers.

## Next Steps

Now that you have the system running and know how to access the services, check out [Core Concepts](./core-concepts.md) to understand the architecture in depth.
