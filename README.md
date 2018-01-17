# React Firebase: render props
React components for Firebase, using render props

```
yarn add react-firebase-renderprops
```

### Example React Native
```jsx harmony
<Firebase
  config={firebaseConfig}
  render={firebase => (
    <FirebaseReference
      firebase={firebase}
      path="blog/posts"
      render={refBlogPosts => (
        <FirebaseQuery
          on
          reference={refBlogPosts}
          limitToLast={20}
          render={posts => (
            <View>
              {posts && posts.map(post => <Text>{post.title}</Text>)}
            </View>
          )}
        />
      )}
    />          
  )}
/>
```

### Components

#### Firebase
Initialize the Firebase JavaScript SDK.

```jsx harmony
<Firebase
  config={{
    apiKey: '...',
    authDomain: '...',
    databaseURL: '...',
    storageBucket: '...'
  }}
  render={(firebase) => {}}
/>
```

#### FirebaseAuthState
Check your firebase authentication state. Returns `false` when not logged in, returns `null` while still initializing.

```jsx harmony
<FirebaseAuthState
  firebase={firebase}
  render={user => {}}
/>
```

#### FirebaseSignInAnonymously

```jsx harmony
<FirebaseSignInAnonymously
  firebase={firebase}
  render={user => {}}
/>
```

#### FirebaseSignInCredentials

```jsx harmony
<FirebaseSignInCredentials
  firebase={firebase}
  email="john@doe.com"
  password="john1234"
  render={user => {}}
/>
```

#### FirebaseSignInCustomToken
```jsx harmony
<FirebaseSignInCustomToken>
  firebase={firebase}
  token="..."
  render={user => {}}
/>
```

#### FirebaseSignOut
```jsx harmony
<FirebaseSignOut
  firebase={firebase}
  render={(done) => {}}
/>
```

#### FirebaseReference
Create a Firebase reference to a single path:
```jsx harmony
<FirebaseReference 
  firebase={firebase}
  path="blog/posts"
  render={(postRef) => {})
/>
```
Or create multiple references using the `paths` props
```jsx harmony
<FirebaseReference 
  firebase={firebase}
  paths={['blog/posts', 'blog/tags']}
  render={(postRef, tagRef) => {})
/>
```

#### FirebaseReferencePush
Push data to your reference. Render function has the push reference as parameter.
```jsx harmony
<FirebaseReferencePush
  reference={reactionRef}
  payload={{msg: '...'}}
  render={(refPush) => {})
/>
```

#### FirebaseQuery
Query a firebase reference. Possible options: 
```jsx harmony
<FirebaseQuery
  on                          // Listen to changes with on
  once                        // Get data once without listening
  reference={refBlogPosts}    // Set reference
  limitToLast={20}            // Limited to the last specific number of children
  orderByKey                  // Order by key
  startAt={3}                 // Starting point for your query
  toArray                     // Maps result object to array
  wait                        // When true, query execution is on hold
  render={posts => {)}
/>
```
 
 #### FirebaseStorage
 Initializes `firebase.storage()`
 
```jsx harmony
 <FirebaseStorage
  firebase={firebase}
  render={(storage) => {}}
 />
 ```
 
 #### FirebaseDownloadURL
 Gets the download urls from files in the Firebas Storage. (`storage.ref(path).getDownloadURL())
 
```jsx harmony
 <FirebaseDownloadURL
  storage={storage}
  path="path"
  render={(url) => {}}
 />
 ```
 
 #### RNFirebaseUploadMedia
React Native: upload device media to Firebase Storage
```jsx harmony
 <RNFirebaseUploadMedia
  mediaUri="file://..."         // Media uri from device
  storagePath="path"            // Path in storage
  fileName="custumname"         // Filename to which file will be saved in firebase
  ext="png"                     // Extension to set the correct mimetype (optional, check if mediaUri contains extension)
  render={() => {}}
 />
 ```