/**
 * xpath locator
 * css locator 
 */

/**
 * xpath
 * //<tagName>[<Property>=<value>]
 * //button[@class='dropbtn']
 * 
 * Navigate
 * 1. Parent to Child //button[@class='dropbtn']//button[@class='child']
 * 2. Child To Parent and ancestors
 *     a. child to a parent   //<html tag>[]//parent::<parent html Tag>[<attribute>=<Value>]
 *     b. child to Ancestor   <Xpath of Child>//acestor::<html tab of Ancestor>[name="company"]
 * 3. Moving between siblings.
 *     a. Follow-siblings : //a[text()='Garry.White']//parent::td//following-sibling::td[text()='Enabled']
 *     b. Preceding-siblings : //td[text()='Garry White']//preceding-sibling::td[text()='ESS']
 * 
 *  4. text()
 *  5. contains() : you have a partial value of the attribute //<html tag>[contains(@<attribute>,<attribute's partial Value>)]
 *  6. AND / OR : //input[@class="nameFld" and contains(@placeholder,'First')]
 *  7. * : it represents any html element 
 */
// We will be back by 1:30
/**
 * css locators
 * 1. class : its is represented by '.' .<value of class>
 * 2. id : it is represented by '#'  #<value of id>
 * 3. Other Attribute  syntax [<attribute>='<value of attribute>']
 * 4. Parent to child 
 * 5. element to the Immmediate sibling : '+' operator
 */
