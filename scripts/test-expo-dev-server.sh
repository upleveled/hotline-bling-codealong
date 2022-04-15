#!/usr/bin/env bash

touch expo-start.log

# Run Expo dev server, redirecting stdout + stderr to log file
expo start --android --non-interactive > expo-start.log 2>&1 &
expo_start_pid=$!

# # Also show logs in terminal
# tail -f expo-start.log &
# tail_pid=$!

# trap "kill $tail_pid && kill $expo_start_pid" SIGINT SIGTERM EXIT
exit_code=0

# Ref: https://superuser.com/a/449307/157255

{ timeout 360 tail -f expo-start.log || echo "Timed out waiting for Expo dev server start (after 360 seconds)"; } | while read LOGLINE
do
  echo "${LOGLINE}"

  if [[ "${LOGLINE}" == *"Android Bundling complete"* || "${LOGLINE}" == *"Android Bundling failed"* ]]
  then
    if [[ "${LOGLINE}" == *"Android Bundling complete"* ]]
    then
      echo "Expo dev server start succeeded"
    elif [[ "${LOGLINE}" == *"Android Bundling failed"* ]]
    then
      echo "Expo dev server start failed"
      exit_code=1
    fi

    break
  fi
done

exit_code=$?
kill ${expo_start_pid}
exit ${exit_code}

# Race processes to locate success + failure messages in dev server output
# Ref: https://superuser.com/a/1074656/157255
# Ref: https://unix.stackexchange.com/a/231678/86691
#todo: combine
# { timeout 310 grep -m 1 "Android Bundling complete" <(tail -f expo-start.log) && echo "Expo dev server start succeeded"; } &
# { timeout 300 grep -m 1 "Android Bundling failed" <(tail -f expo-start.log) && echo "Expo dev server start failed" || echo "Timeout reached" && (cat expo-start.log && exit 1); } &

# # Wait for the first process to finish, and if
# # it was the Expo dev server process or the tail
# # process, continue waiting for the next process
# # to finish
# #todo: wait only on grep
# wait -n
# ([ $! -eq $expo_start_pid ] || [ $! -eq $tail_pid ]) && wait -n
# ([ $! -eq $expo_start_pid ] || [ $! -eq $tail_pid ]) && wait -n

# # Get the exit code of the process, kill the
# # remaining processes, and exit with the
# # same exit code
# exit_code=$?
# echo "Exiting with exit code $exit_code"
# pkill -P $$
# exit $exit_code
