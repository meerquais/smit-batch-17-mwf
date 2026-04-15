/**
 * Firestore collection: users/{uid}
 * @typedef {Object} UserDocument
 * @property {string} uid
 * @property {string} email
 * @property {string} displayName
 * @property {string|null} photoURL
 * @property {string} bio
 * @property {'user'|'admin'} role
 * @property {boolean} isPrivate
 * @property {boolean} isDisabled
 * @property {boolean} isVerified
 * @property {string[]} followers
 * @property {string[]} following
 * @property {string[]} blockedUsers
 * @property {string[]} followRequests
 */

/**
 * Firestore collection: posts/{postId}
 * @typedef {Object} PostDocument
 * @property {string} postId
 * @property {string} userId
 * @property {string} content
 * @property {string|null} mediaUrl
 * @property {'image'|'video'|null} mediaType
 * @property {'public'|'private'} visibility
 * @property {string[]} hashtags
 * @property {string[]} mentionedUsers
 * @property {number} likesCount
 * @property {number} commentsCount
 */

export {};
