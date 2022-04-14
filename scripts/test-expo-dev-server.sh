#!/usr/bin/env bash

ps -p $$
echo starting

touch expo-start.log

# Run Expo dev server, redirecting stdout + stderr to log file
expo start --android --non-interactive > expo-start.log 2>&1 &
expo_start_pid=$!
echo "expo start pid: $expo_start_pid"

# Race processes to locate success + failure messages in dev server output
# Ref: https://superuser.com/a/1074656/157255
# Ref: https://unix.stackexchange.com/a/231678/86691
{ timeout 120 grep -m 1 "Android Bundling complete" <(tail -f expo-start.log) && echo "Expo dev server start succeeded"; } &
{ timeout 120 grep -m 1 "Android Bundling failed" <(tail -f expo-start.log) && echo "Expo dev server start failed" || echo "Timeout reached" && (cat expo-start.log && exit 1); } &


echo waiting

# Wait for the first process to finish, and if
# it was the Expo dev server process, continue
# waiting for the next process to finish
wait -n
waited_pid=$!
[ $! -eq $expo_start_pid ] && wait -n
waited_pid_2=$!

# Get the exit code of the process, kill the
# remaining processes, and exit with the
# same exit code
exit_code=$?
echo "exit code: $exit_code"
echo "waited pid: $waited_pid"
echo "waited pid 2: $waited_pid_2"


cat expo-start.log

pkill -P $$
echo after wait
exit $exit_code
