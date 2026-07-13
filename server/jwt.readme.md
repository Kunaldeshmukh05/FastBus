#JWT FLOW

1.JWT - json web tokens is the modern technique to store and implement the authentication and authorization techniques
2.We do use the sha 256 to encode the token using the payload {username,email} with the secret signature and sends to the clients as well we do use the refresh token that is long lived

3. Access Token - short lived aroud 10-15 minutes if session is gonna long here so client will send the refresh token after the expiry so server will verfy and generate the new access token and so on so after the refresh tokne expiry clinet need to agaian ad emial pass and same happen agan 