import { useState } from 'react';
import { Alert, Text, TextInput, View } from 'react-native';
import AppButton from '../components/AppButton';
import { getMovieRatings, searchMovie } from '../services/imdbApi';
import styles from '../styles/appStyles';

const MovieScreen = () => {
  const [movieName, setMovieName] = useState('');
  const [ratings, setRatings] = useState<any>(null);

  const fetchMovie = async () => {
    try {
      if (!movieName.trim()) {
        Alert.alert('Enter a movie name');
        return;
      }

    
      const results = await searchMovie(movieName);

      if (!results || results.length === 0) {
        Alert.alert('Movie not found');
        return;
      }

      
      const rawId = results[0].id || results[0].id.title || results[0].title || '';
      const extractImdbId = (s: string) => {
        if (!s) return null;
        const m = s.match(/tt\d+/);
        if (m) return m[0];
        return s.replace('/title/', '').replace(/\//g, '');
      };

      const imdbId = extractImdbId(rawId);
      if (!imdbId) {
        Alert.alert('Could not determine IMDb ID for selected result');
        return;
      }

  
      const ratingData = await getMovieRatings(imdbId);
      setRatings(ratingData);

    } catch (error: any) {
      Alert.alert(
        'Error',
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>IMDb Movie Search</Text>

      <TextInput
        placeholder="Enter movie name"
        value={movieName}
        onChangeText={setMovieName}
        style={styles.input}
      />

      <AppButton title="Search Movie" onPress={fetchMovie} />

      {ratings && (
        <View style={{ marginTop: 20 }}>
          <Text>IMDb Rating: {ratings.rating}</Text>
          <Text>Votes: {ratings.ratingCount}</Text>
        </View>
      )}
    </View>
  );
};

export default MovieScreen;
