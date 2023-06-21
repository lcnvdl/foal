cd packages
:each folder
:begin
  :if ('[$currentFolder]' != 'acceptance-tests')
  :begin
    echo [$currentFolder]
    run npm i
  :end
:end

:await
