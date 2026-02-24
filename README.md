# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
 -getElementById(''); if we want to make some changes on a **particular** section/div/tags..etc than we can named it with an uniq id and after that we can manipulate it in javaScript by using document.getElementById(''). Between this clone in the bracket we should put that uniq id.If there are no id mentioned in the clone('') during call it  it will returns NULL.

 -getElementsByClass(''); if we want make **similar** changes in two or more divs or tags than we can give them same class name and after that in javaScript call them by their common class name using document.getElementByClass('');  and make changes to all of them at a time.if the document.getElementByClass(''); contains no className it will returns Empty Array.

 -> querySelector(''); if we want to call a particular class or tag in a section than call the section  and class or tag both together using the document.querySelector('') and under this section javaScript will only pull the first class or tag with similar name. In sort querySelector('') don't pull all tag or class , it only pull only the first children with the  similar class or tag name.

 -> querySelectorAll(''); on the other hand by using document.querySelectorAll('main') we can call all the children and childrenNodes together in the javaScript.

 # 2. How do you create and insert a new element into the DOM?
 
 -> by using document.createElement('') in JS we can create new tag  for our HTML file 
 and 
 after created the tag if we want to insert it in a particular section/div/tag..etc than at first we will call them with their particular id or className or Tag and then we can insert the new created tag by using appendChild() or append()

 # 3. What is Event Bubbling? And how does it work?

 -> (what is Event Bubbling): Event Bubbling is a process where if we create an event for a child element it will expand to its parentNodes..motherParentNodes..grandparentNodes and till the firstParentNodes named document .

 -> (How Does it work): at first we will call a child element with its id or class name const childElement = document.getElementById('childElement') and than we will use addEventListener('click', function(){
    console.log('I am child Element)
 })
 where ever i click on the document body  i will console the text 'I am child Element'. 
 It means if we create an event in a bottom element that event will go up to the top end of the DOM tree and that is how event bubbling work. 

 # 4. What is Event Delegation in JavaScript? Why is it useful?

 -> It is opposite of Event Bubbling. It go up to down . It means if you create an event in a div or section using eventListener() than it will help to handle all the children/childrenNodes/tags inside of that div or section but it will not create any event for it's parentNodes.
 -> And it is useful because 
    1.it use less memory than Event Bubbling
    2.We can control all the child using event.target.classList.contains('className') if use Event Delegation for the parent Element.

# 5. What is the difference between preventDefault() and stopPropagation() methods?

-> preventDefault(); will stop self activities like(form submit, link redirect) of an element.

-> stopPropagation(); method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases. similar-> stopImmediatePropagation(); 