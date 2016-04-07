## Classes

<dl>
<dt><a href="#Comparator">Comparator</a></dt>
<dd></dd>
<dt><a href="#LinkedList">LinkedList</a></dt>
<dd></dd>
<dt><a href="#LinkedListItem">LinkedListItem</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#shellsort">shellsort(itemsarr, comparator, dir)</a></dt>
<dd><p>Implements shellsort method</p>
</dd>
</dl>

<a name="Comparator"></a>

## Comparator
**Kind**: global class  

* [Comparator](#Comparator)
    * [new Comparator()](#new_Comparator_new)
    * [.compare(a, b)](#Comparator+compare) ⇒ <code>int</code>
    * [.comparable(a, b)](#Comparator+comparable) ⇒ <code>boolean</code>
    * [.equals(a, b)](#Comparator+equals)
    * [.lessthan(a, b)](#Comparator+lessthan)
    * [.morethan(a, b)](#Comparator+morethan) ⇒ <code>boolean</code>

<a name="new_Comparator_new"></a>

### new Comparator()
Implements a Generic comparator - may be overriden given special circunstances.

<a name="Comparator+compare"></a>

### comparator.compare(a, b) ⇒ <code>int</code>
**Kind**: instance method of <code>[Comparator](#Comparator)</code>  
**Returns**: <code>int</code> - - value after comparsion. -1 -> a is less than b; 0 -> a equals b; 1 -> a more than b  

| Param |
| --- |
| a | 
| b | 

<a name="Comparator+comparable"></a>

### comparator.comparable(a, b) ⇒ <code>boolean</code>
comparable - checks if two objects can be compared.In the standard implementation this method always returns true;

**Kind**: instance method of <code>[Comparator](#Comparator)</code>  

| Param |
| --- |
| a | 
| b | 

<a name="Comparator+equals"></a>

### comparator.equals(a, b)
equals - check whether two items are equal

**Kind**: instance method of <code>[Comparator](#Comparator)</code>  

| Param |
| --- |
| a | 
| b | 

<a name="Comparator+lessthan"></a>

### comparator.lessthan(a, b)
lessthan - checks if a is less than b

**Kind**: instance method of <code>[Comparator](#Comparator)</code>  

| Param |
| --- |
| a | 
| b | 

<a name="Comparator+morethan"></a>

### comparator.morethan(a, b) ⇒ <code>boolean</code>
more than - checks if a is more than b

**Kind**: instance method of <code>[Comparator](#Comparator)</code>  

| Param |
| --- |
| a | 
| b | 

<a name="LinkedList"></a>

## LinkedList
**Kind**: global class  

* [LinkedList](#LinkedList)
    * [new LinkedList()](#new_LinkedList_new)
    * [.add(item)](#LinkedList+add)
    * [.remove(item)](#LinkedList+remove)
    * [.exists(item)](#LinkedList+exists)
    * [.append(item)](#LinkedList+append)
    * [.prepend(item)](#LinkedList+prepend)

<a name="new_LinkedList_new"></a>

### new LinkedList()
Implements a linkedlist

<a name="LinkedList+add"></a>

### linkedList.add(item)
Adds an item to list

**Kind**: instance method of <code>[LinkedList](#LinkedList)</code>  

| Param |
| --- |
| item | 

<a name="LinkedList+remove"></a>

### linkedList.remove(item)
Removes item from list

**Kind**: instance method of <code>[LinkedList](#LinkedList)</code>  

| Param |
| --- |
| item | 

<a name="LinkedList+exists"></a>

### linkedList.exists(item)
Check whether an item exists on list

**Kind**: instance method of <code>[LinkedList](#LinkedList)</code>  

| Param |
| --- |
| item | 

<a name="LinkedList+append"></a>

### linkedList.append(item)
Append item or list at the end of this list

**Kind**: instance method of <code>[LinkedList](#LinkedList)</code>  

| Param |
| --- |
| item | 

<a name="LinkedList+prepend"></a>

### linkedList.prepend(item)
Adds item(s) at the beginning of present list

**Kind**: instance method of <code>[LinkedList](#LinkedList)</code>  

| Param |
| --- |
| item | 

<a name="LinkedListItem"></a>

## LinkedListItem
**Kind**: global class  
<a name="new_LinkedListItem_new"></a>

### new LinkedListItem()
Abstraction for list item

<a name="shellsort"></a>

## shellsort(itemsarr, comparator, dir)
Implements shellsort method

**Kind**: global function  

| Param | Description |
| --- | --- |
| itemsarr | array to be sorted |
| comparator | Comparator to be used, in case is null, default comparator will be used |
| dir | Tell whether is should be sorted upward(1), or downward(-1) |

