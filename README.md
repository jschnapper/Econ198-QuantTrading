# Econ 198: Quantitative Trading
Repository for the website for the Quantitative Trading Decal (Econ 198) at UC Berkeley

## Managing Content
Because this is not using a cms, any links and external sources need to be added manually.

**How to add assignments:**
When an assignment is yet to be assigned or does not exist, format the table data for that respective week like so :
```
<td class="td-assignment">
</td>
```
Each assignment for a single week should be its own list item. In each list item, wrap the actual assignment in an `a` tag and set the `href` path to appropriate path to the assignment in the resources directory, and wrap the due date in `<div class="due">...</div>`. Ex:
```
<td class="td-assignment">
  <ul class="no-list-style">
    <li class="assignment-wr"><a href="" class="assignment-item" target="_blank">Reading Example</a><div class="due">Due 9/21</div></li>
    <li class="assignment-wr"><a href="" class="assignment-item" target="_blank">Longer Reading Example</a><div class="due">Due 9/21</div></li>
    <li class="assignment-wr"><a href="" class="assignment-item" target="_blank">Reading Example</a><div class="due">Due 9/21</div></li>
  </ul>
</td>
```
If the assignment will not be linked, do not wrap the assignment in an `a` tag.


**How to add resources:**
The resources are in an unordered list on the resources page. To add a resource, add a list item with the appropriate classes like this:
```
<li><a href="../assets/resources/supplemental/econ198_fall2018_syllabus.pdf" class="resource-item" target="_blank">Syllabus</a></li>
```

## Formatting
Use the css color variables found in the `:root` css selector to make sure color themes are continuous. Make special note that black is not true black and white is not true white, so use `var(--black)` and `var(--white)` in place of black and white respectively.

## Site Versions
Quickly access previous versions of the website
