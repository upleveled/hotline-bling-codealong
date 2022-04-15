#!/usr/bin/env bash

touch expo-start.log

# Run Expo dev server, redirecting stdout + stderr to log file
expo start --android --non-interactive > expo-start.log 2>&1 &
expo_start_pid=$!

exit_code=0

# Loop over every line added to log file, exiting if
# matching strings indicating a successful or failed
# server start are found
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
