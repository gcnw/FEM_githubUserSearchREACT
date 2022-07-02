
let GitHubHelper = {
    async search(username){
        return fetch(
            `https://api.github.com/users/${username}`
        )
        .then(response => {
            console.log('RESPONSE RECEIVED')
            if(response.status === 404){
                window.alert('User not found.');
            }
            response.json();
        })
        .then(jsonResponse => {
            return {
                username: jsonResponse.login,
                avatarUri: jsonResponse.avatar_url,
                joinDate: jsonResponse.created_at,
                email: jsonResponse.email,
                bio: jsonResponse.bio,
                repos: jsonResponse.public_repos,
                followers: jsonResponse.followers,
                following: jsonResponse.following,
                location: jsonResponse.location,
                twitter: jsonResponse.twitterUsername,
                webpage: jsonResponse.blog,
                workplace: jsonResponse.company,
            }
        })
    }
}

