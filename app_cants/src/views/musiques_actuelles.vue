<template>
  <div class="mus_act_main">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Évènement</th>
          <th scope="col">Lieu</th>
          <th scope="col">horaires</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event in MusActEvents" v-bind:key="event.id">
          <th scope="row">1</th>
          <td>{{ event.nom }}</td>
          <td>{{ event.lieu }}</td>
          <td>{{ event.horaires}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<!-- SCRIPT -->
<script>
import axios from "axios";

export default {
  name: "MusiquesActuelles",
  data() {
    return {
      MusActEvents: [],
    };
  },

  mounted() {
    axios
      .get(
        "https://data.loire-atlantique.fr/explore/embed/dataset/244400404_agenda-evenements-nantes-nantes-metropole@nantesmetropole/table/?disjunctive.emetteur&disjunctive.rubrique&disjunctive.lieu&disjunctive.ville&disjunctive.lieu_quartier&refine.emetteur=VILLE%20DE%20NANTES&q=musiques%20actuelles&location=8,47.34999,-1.78528&basemap=jawg.streets"
      )
      .then((response) => {
        const events = response.data;
        this.MusActEvents = events.filter((event) =>
          event.type.includes("actuelles")
        );
      });
  },
};
</script>

<!-- STYLE -->
<style></style>
