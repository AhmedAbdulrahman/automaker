# Instabuild

An AI development studio: you describe Features on a board, and agents implement them in isolation while you direct and review.

## Language

### Getting work onto the board

**Feature**:
A unit of work on the board that agents implement in its own Worktree, from Backlog through to Done.
_Avoid_: Task, ticket, card, story

**Worktree**:
A Feature's private working copy of the Project, on its own branch. Every Run happens in its Feature's Worktree; agents never write to the Project's main copy, and no two Features share a Worktree.
_Avoid_: Workspace, sandbox, lane, workstream

**Idea**:
A candidate Feature that has not been committed to the Backlog, whoever proposed it. Ideas are refined, then either promoted or archived.
_Avoid_: Suggestion (as a separate concept), draft, proposal

**Promote**:
Turning an Idea into a Feature in the Backlog. A promoted Idea stays on record as the Feature's origin.
_Avoid_: Convert, ready (for Ideas)

**Suggestion**:
An Idea proposed by an agent rather than a person. It is a source of Ideas, not a separate kind of item, and reaches the Backlog only by being promoted.
_Avoid_: Analysis suggestion, AI feature

**Issue**:
A work item from an outside tracker (such as GitHub) that a Feature can be created from and stays linked to.
_Avoid_: Ticket, using "issue" for a Feature

**Backlog Plan**:
A batch of proposed additions, edits and removals to the Backlog, which a person accepts or rejects as a whole or in part. It is a set of changes, not a kind of work item.
_Avoid_: Using "plan" alone; that word means a Feature's Plan

### Feature lifecycle

**Backlog**:
Features that are not yet able to run: not started, and either awaiting Plan Approval or Blocked.
_Avoid_: Pending, todo, queued

**Ready**:
A Feature that Auto Mode may start right now: its Plan is approved (if it needs one) and it is not Blocked. "Ready" applies only to Features.
_Avoid_: Queued, approved, using "ready" for Ideas

**Blocked**:
A Feature with a dependency that is not yet Done. It is a condition worked out from dependencies, shown on the Feature, not a state the Feature is moved into. There is no way to start a Blocked Feature early.
_Avoid_: Waiting, on hold

**Verified**:
A Feature whose implementation has passed automated verification. It needs no human review to count as done.
_Avoid_: Approved, accepted, reviewed

**Needs Review**:
A Feature whose implementation finished without automated verification, so only a human can confirm it is done.
_Avoid_: Waiting Approval, pending approval, awaiting review

**Failed**:
A Feature whose run ended without a trustworthy result; any partial work is kept, not discarded.
_Avoid_: Errored, broken, sending it back to Backlog

**Interrupted**:
A Feature whose run was stopped by something outside the agent (a person, or the server restarting). It stays Interrupted until someone resumes it or returns it to the Backlog. A failure of the agent's own run, including a crash, is Failed, not Interrupted.
_Avoid_: Stopped, paused, cancelled

**Conflicted**:
A finished Feature whose Merge failed because the Project's main copy changed the same work in the meantime. It leaves this state only through a new Run that resolves the conflict and is checked again before merging.
_Avoid_: Merge conflict (as a state name), broken, Failed

**Done**:
A Feature confirmed finished (Verified, or accepted by a human from Needs Review) and Merged. It is the only state that means a Feature's work is over and in the product.
_Avoid_: Completed, archived, closed, "done but not merged"

**Merge**:
Bringing a Feature's work from its Worktree into the Project's main copy. A Feature cannot be Done without it.
_Avoid_: Ship, land, integrate

**Archive**:
Where Done Features are kept once they are off the board. Archiving hides a Feature; it does not change what state it is in.
_Avoid_: Using "archived" as a state

### Agents

**Project**:
A codebase Instabuild works on. It has one Spec, one Pipeline, its own Context Files and Memory, and the Features being built for it.
_Avoid_: Repo, app, workspace

**Auto Mode**:
Instabuild starting Ready Features on its own across a whole Project, several at a time up to a limit, instead of a person starting each one.
_Avoid_: Autopilot, auto-run, background mode

**Agent**:
An AI worker, whether implementing a Feature or talking with a person.
_Avoid_: Bot, assistant, AI

**Run**:
One agent's attempt to implement a Feature, with its own outcome. Resuming or following up starts a new Run that continues from the last one, so a Feature's history is its sequence of Runs.
_Avoid_: Running agent, job, execution, task

**Chat**:
A saved conversation between a person and an agent that is not implementing a Feature.
_Avoid_: Session, agent session, conversation

**Ideation Chat**:
A Chat whose purpose is to produce Ideas.
_Avoid_: Ideation session, brainstorm

**Context File**:
A rule, convention or reference a person writes for a Project, which every agent working on that Project must follow.
_Avoid_: Memory, prompt, instructions

**Memory**:
Lessons agents record from their own Runs, given back to later agents when relevant. Written by agents, not people, and only from Runs whose Feature was Verified or accepted by a human.
_Avoid_: Context, learnings, knowledge base

**Pipeline**:
A Project's ordered list of Pipeline Steps that every Feature goes through after implementation, before it is judged Verified, Needs Review or Failed.
_Avoid_: Workflow, stages, columns

**Pipeline Step**:
One extra piece of work in a Pipeline (such as reviewing code or writing docs), carried out as its own Run. A Feature may skip particular steps.
_Avoid_: Stage, phase, hook

### Planning

**Spec**:
The single document describing the whole product a Project is building: what it is, what it can do, and its roadmap. One per Project.
_Avoid_: App Spec, project spec, using "spec" for a Feature's Plan

**Plan**:
An agent's proposed approach for implementing one Feature, produced before implementation and subject to Plan Approval.
_Avoid_: Spec, plan spec

**Planning Mode**:
How much planning a Feature gets before implementation: `skip` (none), `lite` (a short Plan), `tasks` (a Plan broken into Tasks), or `full` (Tasks grouped into phases).
_Avoid_: Spec mode, planning level

**Task**:
One step of a Plan, carried out as part of implementing its Feature.
_Avoid_: Using "task" for a Feature, todo

**Acceptance Criteria**:
The conditions a Feature must meet to count as finished; what verification checks against.
_Avoid_: Spec, specification, requirements

**Plan Approval**:
A human accepting a Feature's Plan before implementation begins. The only sense in which Instabuild uses "approval".
_Avoid_: Sign-off, using "approval" for post-implementation review
