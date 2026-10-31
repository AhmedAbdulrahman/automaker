# One Worktree per Feature, and Done means merged

Every Feature gets its own Worktree on its own branch. No two Features share one, and agents never write to the Project's main copy. Isolation cannot be turned off. A Feature is Done only once it has been Merged, so dependents always start from code that really contains their dependencies. We chose this because isolation was the safety promise that Automaker made but did not keep: `useWorktrees` could be turned off, a null `branchName` ran agents in the main checkout, and `skipVerificationInAutoMode` let dependents start before their dependencies existed.

## Considered Options

- **Shared workstreams** (several Features building up on one branch): this lets a dependent build on unmerged work, but one bad Run can damage another Feature's work. Rejected in favour of strict isolation.
- **Keep today's flexibility**, including running in the main checkout: rejected because it breaks the safety promise.

## Consequences

- The `useWorktrees` setting, a null `branchName`, and `skipVerificationInAutoMode` are removed.
- A Feature that depends on another waits until that dependency is Done (merged). This is slower for chains of Features, and that cost is accepted.
- Auto Mode works per Project, not per branch, and the board stops grouping Features by branch.
