import React from 'react';
import Background from './Background'
import './StyleGuide.css'

function StyleGuide(props) {
    return (
        <div className="StyleGuide">
            <Background></Background>
            <h1>StyleGuide</h1>
            <h1 id="headings">Headings</h1>

            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>

            <hr />
            <h1 id="headings-with-text">Headings with Text</h1>

            <h1>Heading 1</h1>
            <p>Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.</p>
            <h2>Heading 2</h2>
            <p>Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.</p>
            <h3>Heading 3</h3>
            <p>Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.</p>
            <h4>Heading 4</h4>
            <p>Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.</p>
            <h5>Heading 5</h5>
            <p>Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.</p>
            <h6>Heading 6</h6>
            <p>Lorem ipsum dolor sit amet, adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl.</p>

            <hr />

            <h1 id="text-block">Block Elements</h1>

            <h2 id="paragraph">Paragraphs and Images</h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor.</p>

            <p><img alt="Placeholder Image and Some Alt Text" src="https://placehold.it/350x150" title="A title element for this placeholder image."></img></p>

            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem.</p>

            <h2 id="blockquote">Blockquote</h2>

            <p>This is a standard paragraph. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <blockquote>
            "<strong>This is a blockquote.</strong> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl."
            </blockquote>
            <p>This is a standard paragraph. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>

            <h2 id="figure-caption">Figure-Caption</h2>

            <figure>
            <img src="https://placehold.it/350x150" alt="A placeholder figure image." />
            <figcaption>The figcaption element example</figcaption>
            </figure>

            <h2 id="details-summary">Details-Summary</h2>

            <details>
            <summary>The summary element example</summary>
            <p>The details example text. It may be styled differently based on what browser or operating system you are using.</p>
            </details>

            <hr />
        </div>
        
    );
}

export default StyleGuide