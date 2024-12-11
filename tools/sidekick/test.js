const doFoo = ({ detail: payload }) => {
  console.log('a custom event happened', payload);
  // your custom code goes here
};

const sk = document.querySelector('aem-sidekick');
if (sk) {
  // sidekick already loaded
    sk.addEventListener('custom:foo', doFoo);
} else {
  // wait for sidekick to be loaded
  document.addEventListener('sidekick-ready', () => {
    // sidekick now loaded
    document.querySelector('aem-sidekick')
      .addEventListener('custom:foo', doFoo);
  }, { once: true });
}
