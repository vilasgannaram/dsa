/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

function solution(isBadVersion) {
	/**
	 * @param {integer} n Total versions
	 * @return {integer} The first bad version
	 */
	return function (n) {
		let left = 1,
			right = n;
		while (left < right) {
			let mid = Math.floor((left + right) / 2);
			if (isBadVersion(mid)) {
				right = mid;
			} else {
				if (left === mid) return right;
				left = mid;
			}
		}
		return right;
	};
}
