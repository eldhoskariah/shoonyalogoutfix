Unofficial Fix for Shoonya Logout issue.  
Some users of shoonya web terminal have reported a frequent logout issue.This is believed to be happening because of a call to an endpoint 'validateHSToken' ,which will return false and then the js logs you out.  
This extention simply blocks out this request.As this request is not essential for working of the application , you will not notice any other issue because of it.  
How to install :  
As its not published in chrome web store ,you will not be able to install it directly instead follow below steps :   
1)Download the whole project (Click on code,download as zip ) and extract it.  
2)Open Extentions window in chrome . Menu -> Settings-> Extentions  
3)Turn on developer mode (top right side)  
4)Click on "load unpacked " (top left ,after enabling developer mode)  
5)Select the location of 'src' folder  
6)Done.  
