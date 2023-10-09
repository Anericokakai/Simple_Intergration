# Simple integration  with __simple integration__ apis

>Simple integration api  came up as an idea to help front end developers to work with real time database without worrying  how the server side works . __simple Integration__ relives front developers from worrying about how does the backend works and only focus on integrating the apis with an already set up server

## How does simple integration works ?

1. Create an account with simple integration ,[here is the link]("http://localhost:5173/home/con_access")

2. Generate an api key at the dashBoard


3. use your api key on each request that you make to any of our apis 
>***REMEMBER TO KEEP YOUR API KEY AS A SECRET IF !!!*** When you feel that your api key has been accessed by other people always generate  new one

## example of a request to simple integration api 
## 1. using axios
```javascript
 const fetchReadme=async(token)=>{
const api_key="oiouittu238904388931tiwuuwyoei"
    const readMeUrl=`http:/localhost:6060/simpleIntegration/api/v1/user_apiKey_generator`
   const data=await axios.get(readMeUrl,{
        Headers:{
            "Authorization":`Bearer ${api_key}`
        }
    })
    return data
}

// !log the result of the dat
fetchReadme().then(result=>{
    console.log(result.data)
})

```
## 2.  using fetch function

```javascript
 
const api_key="oiouittu238904388931tiwuuwyoei"
    const readMeUrl=`http:/localhost:6060/simpleIntegration/api/v1/user_apiKey_generator`
   fetch(readMeUrl,{
        Headers:{
            "Authorization":`Bearer ${api_key}`
        }
    }).then((data)=>{
        return data.json()
    }).then(result=>{
        console.log(result)
    })


```

>All request that you will make using any of our apis must have your api_key as the Authorization else you shall not be able to to post or fetch any data to our servers

# Why choose  __simple integration__?
>simple integration allow you to carry out all the ***crud*** operations to our servers  without stressing how the backend works , your work is to only focus with the front end part and user interface 
---
> We take care of all kind of developers  from a bigener level developer who interacts with  an API for the first time up to an  advanced developers who wants to  carry out complex crud operations

> we store your data  for practice so that you can showcase it to your  potential employers you integration skills  with a running backend service


# examples of apis available with simple integration 

1. ***Create account Login forgot password api***
>As a front end developer ,you should know how to handle forms as forms are a basic requirement in almost all the websites 

>with this api,you are able to create a new user, log to an account on your website using the same credentials ,if the user forgets password he or she can be able to generate a new one using his or her email


