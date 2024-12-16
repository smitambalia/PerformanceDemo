## Re-rendering the component 
    - When does the component re-render ?
        - when the state of the varibles changes 
        - For example , when we use the useState() hooks , it changes the component in which the state is maintained 
    - Elements passed as a prop to a component don't re-render 
      when the parent component re-render.
        
## Profiler 
    - it tells you component wise re-rendering with timing 
    - it is being installed itself on latest web browser
    - dev tool will have profiler listed

# Memo
    - Function which stops re-rendering the react component
    - use memo function from the react library 