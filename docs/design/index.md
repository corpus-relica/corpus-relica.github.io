# Overview

## Quintessential Semantic Modelling

## Architectural Components

```mermaid
    C4Component
    title Component diagram for Systema Relica

    Container(archivist, "Archivist", "Gellish Relation Space Interface", "Allows")

    Container_Boundary(dataplex, "Dataplex") {
        ContainerDb(graph, "Neo4j", "Gellish", "Stores Gellish Facts + Metadata")
        ContainerDb(cache, "Redis", "Various Schema", "Stores Cache Data")
        ContainerDb(env, "PostgreSQL", "Various Schema", "Stores Env Data (auth, session-state)")
    }

    Container_Boundary(clarityCore, "Clarity-Core") {

        Component(he, "Heuristic Engine", "foobar", "Allows")
    }

    Rel(archivist, graph, "uses")
    Rel(archivist, cache, "uses")
    Rel(archivist, env, "uses")
```

    <!-- Rel(clarityCore, env, "uses") -->
    <!-- Rel(clarityCore, archivist, "uses") -->
### Dataplex

Graph Database

Cache

### Archivist

Interface to Graph Database and Cache's

Provides API access to Semantic Model Relation-Space

*Auth

*Access Control

### The Clarity Core

Interface to Semantic Model Relation-Space(Archivist)

Provides runtime configurable mapping layer between Semantic Model Entities and users Application Domain (GraphQL)

#### Heuristic Engine

Stack-based recursively-calling heirarchical-state-machine management sub-component

Alongside comprehensive set of HSM definitions comprising essential Quintessential Modelling Heuristics

The term 'Heuristic' meaning our HSM definitions/interpretation specifically purposed for stepping through complex operations over the Semantic Model
