# Feature states tell the truth

Inherited from Automaker, a Feature's status could mislead: `verified` was set without checking test results, `waiting_approval` mixed unchecked work with runs where the agent did nothing, failed runs were silently sent back to `backlog`, and `completed` meant "archived". We replaced this with a model where every state makes one promise: **Ready** (Auto Mode may start it now), **Verified** (automated verification passed), **Needs Review** (finished but unchecked, so a human must confirm), **Failed** (the Run's own fault; partial work kept), **Interrupted** (stopped from outside; stays visible until someone acts), **Conflicted** (the Merge failed), and **Done** (confirmed and merged). We chose this because Instabuild is only useful if people can trust the board without opening every card.

## Consequences

- `waiting_approval`, `completed`, `pending`/`running` and the `FeatureStatus` type go away. Existing `feature.json` files need a migration (`waiting_approval` becomes `needs_review`, `completed` becomes `done`).
- "Approval" now means only Plan Approval.
- A human accepting a Needs Review Feature sends it to Done, never to Verified, so Verified always means "automated checks passed".
- Blocked and Archived are conditions shown on a Feature, not states it moves into.
- Memory is recorded only from Runs whose Feature was Verified or accepted, so unchecked work cannot teach later agents.
