async function main() {
  await customElements.whenDefined("atomic-search-interface");
  const searchInterface: HTMLAtomicSearchInterfaceElement =
    document.querySelector("atomic-search-interface")!;
  await searchInterface.initialize({
    organizationId: "lbompartfromagecomponents6vwmeh57",
    platformUrl: "https://platformstg.cloud.coveo.com",
    accessToken: "xx1734a078-418c-4bdb-9b68-cd278b9f124d",
  });

  searchInterface.executeFirstSearch();
}

export default main;
