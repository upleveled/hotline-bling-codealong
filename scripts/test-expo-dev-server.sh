#!/usr/bin/env bash

#  Run Expo dev server, redirecting stdout + stderr to log file
yarn start --android > expo-start.log 2>&1 &

# Race jobs to locate success + error messages in dev server output
# Ref: https://superuser.com/a/1074656/157255
# Ref: https://unix.stackexchange.com/a/231678/86691
{ timeout 120 grep -m 1 "Android Bundling complete" <(tail -f expo-start.log); } &
{ timeout 120 grep -m 1 "Android Bundling failed" <(tail -f expo-start.log) && cat expo-start.log && exit 1; } &

# Wait for the server start to finish
wait -n

# Wait for the first grep job to complete
# and then kill the remaining job
wait -n
exit_code=$?
pkill -P $$
exit $exit_code
