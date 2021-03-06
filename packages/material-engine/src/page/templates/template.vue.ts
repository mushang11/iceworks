const template = `<template>
<div class="<%= pageName %>-page">
  <% for(var i = 0; i < blocks.length; i++){ -%>
  <% if (blocks[i].description) { -%>
  <!-- <%= blocks[i].description -%> --><% } -%>
  <<%= blocks[i].className -%> />
  <% } -%>
</div>
</template>
<script>
<% for (var i = 0; i < blocks.length; i++) { -%>
import <%= blocks[i].className %> from '<%= blocks[i].relativePath -%>';
<% } -%>
export default {
name: '<%= pageName %>',
components: {
  <% for(var i = 0; i<blocks.length; i++) { -%>
    <%= blocks[i].className -%>,
  <% } -%>
  }
} 
</script>
`;

export default template;
