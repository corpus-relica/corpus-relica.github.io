# Semantic Transaction Engine

The hard part is getting information in, or maybe more specifically, in establishing initial data-model/ontologies.

Transaction Engine is a system component designed to aid the user/agent in repeatably/predictably stepping through explicit protocols for establishing expression of knowledge within the Semantic Model.

At a high level it is a State-Machine Stack management system. That is, it manages the execution of heirarchichal state machine instances which may cause the instantiation and execution of further state-machine instances. Upon triggering instantiation of new SM instance, previously active state-machine instance is pushed on to a stack. When current SM is complete, previous SM is poped off of stack and execution resumes from where it left off.

Any meaningfull transaction in the Semantic Model will involve the creation or revokation of a set of facts that are compliant with the structure and semantic information already present in the model. The State Machine definitions represent complete but unit procedures for performing meaningful operations in the Semantic Model, e.g. 'Define new Physical Object', 'Create Requirements based on Existing Occurrence', etc.

The overarching goal is to provide a system which can help step through the piece-meal accumulation and validation of a set of facts (which may be complexly interelated and related to information already in db) before finally committing them to the Semantic Model in the finished State of the top level SM(by which time we should be certain that the facts are complete and valid both syntactically and semantically).
