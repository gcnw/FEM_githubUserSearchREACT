
export const GitHubHelper = {
    async search(username){
        return fetch(
            `https://api.github.com/users/${username}`
        )
        .then(response => {
            console.log('RESPONSE RECEIVED')
            if(response.status === 404){
                window.alert('User not found.');
            }
            console.log(response.json)
            return response.json();
        })
        .then(jsonResponse => {
            return {
                name: jsonResponse.name,
                avatarUri: jsonResponse.avatar_url,
                joinDate: jsonResponse.created_at,
                username: jsonResponse.login,
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
export default GitHubHelper