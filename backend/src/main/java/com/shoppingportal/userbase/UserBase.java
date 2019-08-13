package com.shoppingportal.userbase;

import com.shoppingportal.customer.Customer;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "userbase")
@Getter
@Setter
@NoArgsConstructor
@RequiredArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class UserBase {

    @Id
    @GeneratedValue
    private Long id;

    @NonNull
    @Column(nullable = false)
    private String email;

    @NonNull
    @Column(nullable = false, columnDefinition = "varbinary(256)")
    @JsonIgnore
    private byte[] passwordHash;

    @NonNull
    @Column(nullable = false, columnDefinition = "varbinary(256)")
    @JsonIgnore
    private byte[] passwordSalt;

    @NonNull
    @OneToOne(optional = false, fetch = FetchType.LAZY, orphanRemoval = true, cascade = CascadeType.ALL)
    @JoinColumn(name = "customer_id")
    private Customer customer;
}
