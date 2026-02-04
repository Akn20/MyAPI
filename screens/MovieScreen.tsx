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

      // 1️⃣ Search movie
      const results = await searchMovie(movieName);

      if (!results || results.length === 0) {
        Alert.alert('Movie not found');
        return;
      }

      // 2️⃣ Extract IMDb ID (remove "/title/")
      const imdbId = results[0].id.replace('/title/', '').replace('/', '');

      // 3️⃣ Fetch ratings
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
