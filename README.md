# Angular MFE Basic

Basic Angular based MFE app to showcase how to setup MFE in Angular. 

Exploring below concepts:

- MFE Inital Setup using Native Federation
- Event based communication between remote apps
- Shared library between remote apps
- Routing configurations
- Styling CSS

___

#### Micro FrontEnd

We will head in this direction:

1. Angular MFE Basic
	- ngmfe-basic
	- Basic Angular based MFE app to showcase how to setup MFE in Angular
2. MFE Basic
	- mfe-basic
	- Basic MFE app to showcase how to setup MFE with Angular + React + Vue
3. Angular MFE Admin
	- ngmfe-admin
	- Admin MFE app to showcase how to setup MFE admin with Angular
4. Angular MFE Admin Auth
	- ngmfe-admin-auth
	- Admin MFE app to showcase how to setup MFE auth based admin with Angular
5. Angular MFE Admin Host
	- ngmfe-admin-host
	- Admin MFE app to showcase how to setup MFE auth based admin with Angular fully standalone host

#### 1. Angular MFE Basic

Create 3 Angular apps, with 1 host and 2 remotes. Just show case the setup of these apps and how to interact using custom events. Consider deployment using Netlify. Build interesting UI to showcase visually 2 apps running as one and with console logs to show case each custom events.

```
app1: host [post-host]
app2: remote [post-list]
app3: remote [post-view]
```

#### 2. MFE Basic

Create 3 Angular apps, same as "Angular MFE Basic" but implemented using Angular + React + Vue.

```
app1: host [post-host]
app2: remote [post-list]
app3: remote [post-view]
```

#### 3. Angular MFE Admin

Create 3 Angular apps, admin kind of app with 1 host and 2 remotes. Consider host app with having skeleton of admin while the remote apps will have products and users features.

```
app1: host [admin-host]
	- header/footer
	- home
app2: remote [products]
app3: remote [users]
```

#### 4. Angular MFE Admin Auth

Create 3 Angular apps, same as "Angular MFE Admin" with auth (login feature).

```
app1: host [admin-host]
	- header/footer
	- home
	- login
app2: remote [products]
app3: remote [users]
```

#### 5. Angular MFE Admin Host

Create host Angular apps fully standalone host same as "Angular MFE Admin Auth".

```
app1: host [admin-host]
app2: remote [header]
app3: remote [login]
app4: remote [home]
app5: remote [products]
app6: remote [users]
``` 
