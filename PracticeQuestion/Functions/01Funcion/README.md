Some Point to Remember me :

1. When we use .map() in the function you have to return the list 
  Example :
              <li>heyy</li>
            {items.map((item) =>{
               return <li >{item}</li>
            })}

2. If function pass the argument , u can directly call the function in APP file :
    Example :
              {AcceptMssg("Function call directly bcoz it doesn't use props")} 

3. In APP u want to return the component bu You pass the some HTml Inside the component 
 like :
          <Children>
             <h2>User Profile</h2>
             <p>Name: Anjali</p>
             <p>Role: Frontend Developer</p>
          </Children>
   then you can access this as a {props.children}. Its behaves like a props
