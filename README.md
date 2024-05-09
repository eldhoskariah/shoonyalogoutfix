Unofficial Fix for Shoonya Logout issue.
Some users of shoonya web terminal have reported a frequent logout issue.This is believed to be happening because of a call to an endpoint 'validateHSToken' ,which will return false and then the js logs you out.
This extention simply blocks out this request.As this request is not essential for working of the application , you will not notice any other issue because of it.
