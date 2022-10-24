# 04 Details

## Summary

This example takes the _04-detail_ example as a starting point.

We are going to add an input and a button to find members of a company in github using his API.
We use "lemoncode" by default company.


## Step by Step Guide

- Copy the project and do an _npm install_.

```bash
npm install
```

then do _npm start_ to start the server emulator.

## USE:

 -- Login page:

 To access the content you must type username: admin and password: test, if you don't, it appears an error message (test it).

 Once on list page, you can type the name of a company like "microsoft" of "facebook" and then click on "GO!" button to get the list of members.

 If you select one member, you can access into his details.

 # Features:

 There is another version of the search bar:

 Instead a form, you can use a text field where you can type the name of the company and after a second you left type the search starts.

 On list.search.component.tsx uncomment the <JustTextField /> component and comment the <FormSearch /> , and on list.container.tsx change the filter in the useEffect(), [debounce] instead [company].



