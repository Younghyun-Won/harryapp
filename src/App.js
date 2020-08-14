import React from 'react';
import {Image} from 'semantic-ui-react'

import Comments from './comment.js'


import puppy from "./BBB.jpg"


function App() {
  return (
    <div>
    <Image src = {puppy} centered />
    <Comments />

    </div>
  );
}

export default App;
