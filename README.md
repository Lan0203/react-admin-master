# HashRouter (中间有#号)
http://localhost:3000/#/admin/buttons


# BrowserRouter

http://localhost:3000/admin/buttons

# Route用法
```javascript
<Route path='/admin/ui/buttons' component={Buttons}/>
<Route path='/admin' render={()=>
    <Admin>
        <Route path='/admin/ui/buttons' component={Buttons}/>
    </Admin>
}/> 
```

# Switch
只匹配到一个

# Redirect 重定向
<Redirect to='/admin/home'/>