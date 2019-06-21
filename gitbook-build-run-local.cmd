REM npm install -g gitbook-cli
REM npm install -g serve

call gitbook install

call gitbook build . --log=debug --debug

start serve _book

start "" http://127.0.0.1:5000

pause
