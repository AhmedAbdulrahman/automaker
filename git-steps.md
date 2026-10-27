# Sync your fork with upstream

Use this when you want to bring the latest upstream development into your own
repository (`origin`). These steps preserve your local commits and publish the
combined result to your fork.

## 1. Check your working tree

```bash
git status
```

Commit or stash any uncommitted work before merging. Do not continue with a
dirty working tree unless you understand which changes are uncommitted.

## 2. Fetch upstream changes and release tags

```bash
git fetch upstream --tags
```

Confirm that `upstream` points to the original project and `origin` points to
your fork:

```bash
git remote -v
```

## 3. Back up your current `main`

```bash
git switch main
git branch backup/main-before-upstream
```

If that backup branch already exists, choose a different backup name.

## 4. Merge upstream into your `main`

```bash
git merge upstream/main
```

If Git reports conflicts, edit the conflicted files, then mark them resolved
and finish the merge:

```bash
git add <resolved-files>
git commit
```

Run your tests and review the changes before pushing.

## 5. Push the updated branch to your fork

```bash
git push origin main
```

Using `origin` explicitly pushes to your fork; `upstream` should remain the
original project.

## Use a specific release instead

Release names such as `v1.0.0` are tags, not branches. Fetch tags with
`git fetch upstream --tags`, then inspect a release without changing your
current branch:

```bash
git show --no-patch v1.0.0
git switch --detach v1.0.0
```

Detached mode is for viewing or testing that exact release. To incorporate a
release into your own `main`, switch back to `main` and merge the tag:

```bash
git switch main
git merge v1.0.0
git push origin main
```

Use `git merge upstream/main` instead when you want the latest upstream
development, which may be newer than the latest stable release.

## Avoid `reset --hard` for syncing a fork

`git reset --hard upstream/main` replaces the current branch state and can
discard commits and uncommitted changes. Only use it when you intentionally
want to throw away the local branch's differences and have verified that
nothing needs to be kept.
