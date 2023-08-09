import SecurityClient from "@app/components/utilities/SecurityClient";

/**
 * This route lets us get the all the orgs of a certain user.
 * @returns
 */
const getOrganizations = () => {
  return SecurityClient.fetchCall("/api/v1/organization", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(async (res) => {
    if (res?.status === 200) {
      const {organizations} = await res.json();
      return organizations;
    }
    console.log("Failed to get orgs of a user");
    return undefined;
  });
}

export default getOrganizations;
