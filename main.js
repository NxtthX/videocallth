window.open("index.html",null,"fullscreen=yes,channelmode=no,scrollbars=yes,resizable=no,status=no,toolbar=no,directories=no")
localStream.switchCamera(localStream, { facingMode: 'environment'}, function(Stream) {
         if(stream && stream.getID) {
             localStream = stream; // LocalStream updated   
         }
         else {
             // Failed to switch
         }
 });
