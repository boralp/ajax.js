# ajax.js

Vanilla JavaScript, XHR2, post, get, and upload supported ajax wrapper under 50 lines.

  - GET
  - POST with file upload and progress bar
  - No dependicies, only 574 bytes.

## Install
`<script src="ajax.min.js"></script>`


## Usage
To install an-blog you only need to pull or download the files into your server. No composer or other third party framework to run.

## GET request
### Pre-defined parameters
You can declare the parameters send by get request by hand.
```
ajax('GET', 'https://localhost:3000', {
    'First name': 'Bora',
    'Middle name': 'Alp',
    'Last name': 'Arat',
    'birthday': document.getElementById('birthday').value
}, function (data) {
    console.log(data.response);
}, function (error) {
    console.log('An error occured, please check connection:' + error);
});
```
### FormData dynamic parameters
FormData() can parse the inputs in a form automatically, you need to give the `id` of the form as a `string` data.
```
ajax('GET', 'https://localhost:3000', '#my-new-form', function (data) {
    console.log(data.response);
}, function (error) {
    console.log('An error occured, please check connection:' + error);
});
```

## POST request
Post request automatically handles any file upload.
### Pre-defined parameters
You can declare the parameters send by get request by hand.
```
ajax('POST', 'https://localhost:3000', {
    'First name': 'Bora',
    'Middle name': 'Alp',
    'Last name': 'Arat',
    'birthday': document.getElementById('birthday').value
}, function (data) {
    console.log(data.response);
}, function (error) {
    console.log('An error occured, please check connection:' + error);
});
```
### FormData dynamic parameters
FormData() can parse the inputs in a form automatically, you need to give the `id` or `selector` of the form as a `string` data.
```
ajax('POST', 'https://localhost:3000', '#my-new-form', function (data) {
    console.log(data.response);
}, function (error) {
    console.log('An error occured, please check connection:' + error);
});
```
