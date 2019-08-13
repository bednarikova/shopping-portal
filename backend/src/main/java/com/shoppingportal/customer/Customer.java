package com.shoppingportal.customer;


import com.shoppingportal.purchase.Purchase;
import com.shoppingportal.userbase.UserBase;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@RequiredArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Customer {

    @Id
    @GeneratedValue
    private Long id;

    @NonNull
    @Column(nullable = false)
    private String firstName;

    @NonNull
    @Column(nullable = false)
    private String lastName;

    @NonNull
    @OneToOne
    private Address address;

    @NonNull
    @OneToOne(optional = false, fetch = FetchType.LAZY, mappedBy = "customer")
    private UserBase userBase;

    @OneToMany(mappedBy = "customer")
    private List<Purchase> purchases;
}
