<template>
  <div>
    <p>User list</p>
    {{loading}}
    <div>
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Listado",
  data() {
    return {
      loading: false,
      users: [],
    };
  },
  created() {
    this.getUsers()
  },
  methods: {
    getUsers() {
      this.loading = true
      fetch("https://6065f8bfb8fbbd0017567d11.mockapi.io/users")
        .then((res) => res.json())
        .then((users) => {
          this.users = users;
          this.loading = false;
        });
    },
  },
};
</script>