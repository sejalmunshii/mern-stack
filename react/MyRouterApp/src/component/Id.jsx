    import React from 'react'
    import { useParams } from 'react-router';

    function Id() {
          const {id} =useParams();
      return (
        <>
          <h2>user id:{id}</h2>
        </>
      )
    }
  
    export default Id;