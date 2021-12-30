Create a select component that will get a list of options.
<br>

Option will have:<br>
1  ID - string;<br>
2. Label - string;<br>

<br>
The component will display the label string and the select value will be the id.
<br>
<br>
The default option view will be :
<br>
'Your option:' + LABEL_PLACEHOLDER


<br>
<br>
The component also needs to support dynamic template kind, that will be injected when using the component. (inject from outside )
<br>
<br>
For example we will be able to define a kind :'upperCase', which view will be:
<br>
'UPPER CASE OPTION:' + LABEL_PLACEHOLDER.toUpperCase()

 
