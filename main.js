localStream.switchCamera(localStream, { facingMode: 'environment'}, function(Stream) {
         if(stream && stream.getID) {
             localStream = stream; // LocalStream updated   
         }
         else {
             // Failed to switch
         }
 });
