import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/store';

const client = new ApolloClient({
	uri: 'http://test-task.profilancegroup-tech.com/graphql',
	cache: new InMemoryCache(),
});

client
	.query({
		query: gql`
		query short_urls{
			short_urls{
				data{
					id
					url
					short_url
					clicks
					created_at
					updated_at
				}
				paginatorInfo{
					count
					currentPage
					firstItem
					hasMorePages
					lastItem
					lastPage
					perPage
					total
				}
			}
		}
		`,
	})
	.then((result) => console.log(result.data.short_urls));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<Provider store={store}>
				<App />
			</Provider>
		</ApolloProvider>
	</React.StrictMode>
);