const doFoo = ({ detail: payload }) => {
  console.log('a custom event happened', payload);
  // your custom code goes here
};

const sk = document.querySelector('aem-sidekick');
if (sk) {
  // sidekick already loaded
    sk.addEventListener('custom:foo', doFoo);
}
